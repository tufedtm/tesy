from django.contrib.auth.models import User
from graphene import relay, AbstractType, ObjectType, ClientIDMutation
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from cookbook.models import Category, Ingredient


class CategoryNode(DjangoObjectType):
    class Meta:
        model = Category
        filter_fields = ['name', 'ingredients']
        interfaces = (relay.Node,)


class IngredientNode(DjangoObjectType):
    class Meta:
        model = Ingredient
        exclude_fields = ('owner',)
        filter_fields = {
            'name': ['exact', 'contains', 'istartswith'],
            'notes': ['exact', 'icontains'],
            'category': ['exact'],
            'category__name': ['exact'],
        }
        interfaces = (relay.Node,)

    @classmethod
    def get_node(cls, id, context, info):
        try:
            ingredient = cls._meta.model.objects.get(id=id)
        except cls._meta.model.DoesNotExist:
            return None

        if ingredient.published and context.user == ingredient.owner:
            return ingredient


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        only_fields = ('username', 'email')
        interfaces = (relay.Node,)


class Query(AbstractType):
    category = relay.Node.Field(CategoryNode)
    all_categories = DjangoFilterConnectionField(CategoryNode)

    ingredient = relay.Node.Field(IngredientNode)
    all_ingredients = DjangoFilterConnectionField(IngredientNode)

    user = DjangoFilterConnectionField(UserNode)

    def resolve_all_ingredients(self, args, context, info):
        if not context.user.is_authenticated():
            return Ingredient.objects.none()
        else:
            return Ingredient.objects.filter(owner=context.user)

    def resolve_user(self, args, context, info):
        if not context.user.is_authenticated():
            return User.objects.none()
        else:
            return User.objects.filter(id=context.user.id)


class CreateIngredient(ClientIDMutation):
    pass

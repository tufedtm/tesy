import graphene
from graphene_django.debug import DjangoDebug
import cookbook.schema


class Query(cookbook.schema.Query, graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name='__debug')


schema = graphene.Schema(query=Query)

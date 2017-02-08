from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    notes = models.TextField()
    published = models.BooleanField(default=True)
    owner = models.ForeignKey('auth.User', related_name='users')
    category = models.ForeignKey(Category, related_name='ingredients')

    def __str__(self):
        return self.name

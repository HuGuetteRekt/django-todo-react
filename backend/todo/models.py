from django.db import models

# Create your models here.

class Livre(models.Model):
    auteur = models.CharField(max_length=100)
    titre = models.CharField(max_length=100)
    date = models.DateTimeField()

    def _str_(self):
        return self.title


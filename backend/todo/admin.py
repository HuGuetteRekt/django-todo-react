from django.contrib import admin
from .models import Livre

# Register your models here.

class LivreAdmin(admin.ModelAdmin):  
   list_display = ('auteur', 'titre', 'date') 
    
    
admin.site.register(Livre, LivreAdmin)

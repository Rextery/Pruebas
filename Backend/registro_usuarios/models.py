from django.db import models
from django.core.validators import RegexValidator, EmailValidator

class Persona(models.Model):
    cedula = models.CharField(max_length=10, unique=True, verbose_name='Cédula')
    primer_nombre = models.CharField(max_length=20, verbose_name='Primer Nombre')
    segundo_nombre = models.CharField(max_length=20, blank=True, null=True, verbose_name='Segundo Nombre')
    SEXO_CHOICES = [('H', 'Hombre'), ('M', 'Mujer')]
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES, verbose_name='Sexo')
    edad = models.PositiveIntegerField(verbose_name='Edad')
    email = models.EmailField(max_length=30, validators=[EmailValidator()], verbose_name='Email')
    direccion = models.CharField(max_length=30, verbose_name='Dirección')

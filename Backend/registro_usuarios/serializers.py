from rest_framework import serializers
from .models import Persona

class PersonaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Persona
        fields = ('id','cedula', 'primer_nombre', 'segundo_nombre', 'sexo', 'edad', 'email', 'direccion')
        
    def create(self, validated_data):
        validated_data['id'] = validated_data.get('cedula')
        return super(PersonaSerializer, self).create(validated_data)    
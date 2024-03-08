from rest_framework import routers
from .api import PersonaViewSet

router = routers.DefaultRouter()

router.register('api/Personas',PersonaViewSet,'Personas')

urlpatterns = router.urls
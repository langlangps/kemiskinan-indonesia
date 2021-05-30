from django.utils import timezone
from django.db import models

# Create your models here.
class Message(models.Model):

    name = models.CharField(max_length=100, null=True)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)

    # def save(self, *args, **kwargs):
    #     if not self.id:
    #         self.created = timezone.now()
        
    #     return super(Message, self).save(*args, **kwargs)



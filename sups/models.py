from django.db import models

class Sup(models.Model):
    text = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    thumbnail = models.ImageField(upload_to="sup-thumbnails/", null=True, blank=True)

    def __str__(self):
        return self.text

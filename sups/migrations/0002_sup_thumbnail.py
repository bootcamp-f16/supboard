# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sups', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sup',
            name='thumbnail',
            field=models.ImageField(null=True, upload_to='sup-thumbnails/', blank=True),
        ),
    ]

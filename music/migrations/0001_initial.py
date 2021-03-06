# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=128)),
                ('artist', models.CharField(max_length=64)),
                ('rating', models.FloatField()),
                ('review_url', models.URLField()),
                ('artwork', models.ImageField(upload_to=b'music/')),
                ('spotify_url', models.CharField(max_length=128)),
                ('author', models.ForeignKey(to='main.Author')),
            ],
        ),
    ]

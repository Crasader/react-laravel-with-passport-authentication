<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = ['course_id','chapter_id','title','slug','description','url','order','cover','duration'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    protected $fillable = ['course_id','title','slug'];

    public function videos(){
        return $this->hasMany('App\Video');
    }
}

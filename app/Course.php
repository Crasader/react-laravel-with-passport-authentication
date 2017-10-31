<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = ['slug','category','title','subtitle','requirements','description','benefits','price','language','created_by'];

    public function users(){
        return $this->belongsToMany('App\User','subscriptions','course_id','user_id')
            ->using('App\Subscription')
            ->as('subscription')
            ->withPivot('active')
            ->withTimestamps();
    }

    public function ratings(){
        return $this->hasMany('App\Rating');
    }

    public function chapters(){
        return $this->hasMany('App\Chapter');
    }

    public function videos(){
        return $this->hasMany('App\Video');
    }
}

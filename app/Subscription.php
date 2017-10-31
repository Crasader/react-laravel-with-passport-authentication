<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Subscription extends Pivot
{
    protected $fillable = ['user_id','course_id','active'];
}

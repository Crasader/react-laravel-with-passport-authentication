<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Category extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
       return [
            'id' => $this->id,
           'slug'   => $this->slug,
           'name'   => $this->name,
           'description'    => $this->mergeWhen($this->description,!null),
           'parent_id'  => $this->parent_id,
           'priority'   => $this->priority,
           'createdAt' => $this->created_at,
           'updatedAt' =>  $this->updated_at
       ];
    }
}

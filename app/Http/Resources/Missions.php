<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Missions extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'title' => $this->title,
            'text' => $this->text,
            'image' => $this->image,
        ];
    }
}

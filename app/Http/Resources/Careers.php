<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Careers extends JsonResource
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
            'text' => $this->text,
            'image1' => $this->image1,
            'image2' => $this->image2,
        ];
    }
}

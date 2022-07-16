<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Services extends JsonResource
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
            'text1' => $this->text1,
            'image1' => $this->image1,
            'text2' => $this->text2,
            'image2' => $this->image2,
        ];
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'text1',
        'image1',
        'text2',
        'image2',
        'service_type_id',
    ];

    public function service_type()
    {
        return $this->belongsTo(ServiceType::class);
    }
}

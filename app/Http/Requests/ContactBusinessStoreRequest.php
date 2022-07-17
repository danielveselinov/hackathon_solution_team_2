<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactBusinessStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'full_name' => 'required',
            'email' => 'required|email',
            'company_name' => 'required',
            'phone_number' => 'required|numeric',
            'message' => 'required',
        ];
    }
}

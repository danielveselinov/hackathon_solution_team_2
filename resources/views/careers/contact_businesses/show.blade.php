<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center">
            <a href="{{ URL::previous() }}" class="mr-3 p-2 rounded hover:bg-blue-200"><span class="iconify" data-icon="eva:arrow-back-fill" data-width="24" data-height="24"></span></a>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{ __('Contact Businesses') }}</h2>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <ul class="w-96 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 light:bg-gray-700 light:border-gray-600 light:text-white" style="margin: 0 auto 25px auto;">
                        <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 light:border-gray-600"><strong>Full Name:</strong> {{ $business->full_name }}</li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600"><strong>Email:</strong> {{ $business->email }}</li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600"><strong>Company Name:</strong> {{ $business->company_name }}</li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600"><strong>Phone Number:</strong> {{ $business->phone_number }}</li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600"><strong>Message:</strong> {{ $business->message }}</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
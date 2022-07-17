<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Contact Personals') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <ul class="w-96 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 light:bg-gray-700 light:border-gray-600 light:text-white" style="margin: 0 auto 25px auto;">
                        <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 light:border-gray-600"><strong>Full Name:</strong> {{ $personal->full_name }}</li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600"><strong>Email:</strong> {{ $personal->email }}</li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600"><strong>Message:</strong> {{ $personal->message }}</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
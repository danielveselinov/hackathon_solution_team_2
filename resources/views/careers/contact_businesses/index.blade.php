<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Contact Businesses') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-4">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">#</th>
                                    <th scope="col" class="py-3 px-6">Full Name</th>
                                    <th scope="col" class="py-3 px-6">Email</th>
                                    <th scope="col" class="py-3 px-6">Company</th>
                                    <th scope="col" class="py-3 px-6">Phone No.</th>
                                    <th scope="col" class="py-3 px-6">Seen</th>
                                    <th scope="col" class="py-3 px-6">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($businesses as $business)
                                <tr class="bg-white border-b light:bg-gray-900 light:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                        {{ $business->id }}
                                    </th>
                                    <td class="py-4 px-6">{{ $business->full_name }}</td>
                                    <td class="py-4 px-6">{{ $business->email }}</td>
                                    <td class="py-4 px-6">{{ $business->company_name }}</td>
                                    <td class="py-4 px-6">{{ $business->phone_number }}</td>
                                    <td class="py-4 px-6">{{ $business->is_seen ? 'Yes' : 'No' }}</td>
                                    <td class="py-4 px-6 flex">
                                        <form method="POST" action="{{ route('businesses.show', $business->id) }}">
                                            @csrf
                                            @method('PUT')
                                            <a href="{{ route('businesses.show', $business->id) }}" class="font-medium text-blue-600 light:text-blue-500 hover:underline ml-2">Preview</a>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
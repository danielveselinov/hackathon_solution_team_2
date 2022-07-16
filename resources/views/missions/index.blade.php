<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Missions') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                    @if (session()->has('missionMessages'))
                    <div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <span class="font-medium">Info! </span>{{ session()->get('message') }}
                    </div>
                    @endif
                    <a href="{{ route('missions.create') }}" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add new data</a>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-4">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">#</th>
                                    <th scope="col" class="py-3 px-6">Title</th>
                                    <th scope="col" class="py-3 px-6">Text</th>
                                    <th scope="col" class="py-3 px-6">Image</th>
                                    <th scope="col" class="py-3 px-6">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($missions as $mission)
                                <tr class="bg-white border-b light:bg-gray-900 light:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                        {{ $mission->id }}
                                    </th>
                                    <td class="py-4 px-6">{{ Str::limit($mission->title, 45) }}</td>
                                    <td class="py-4 px-6">{{ Str::limit($mission->text, 10) }}</td>
                                    <td class="py-4 px-6">{{ Str::limit($mission->image, 10) }}</td>
                                    <td class="py-4 px-6 flex">
                                        <a href="{{ route('missions.edit', $mission->id) }}" class="font-medium text-blue-600 light:text-blue-500 hover:underline">Edit</a>
                                        <form method="POST" action="{{ route('missions.destroy', $mission->id) }}">
                                            @csrf
                                            @method('DELETE')
                                            <a href="{{ route('missions.destroy', $mission->id) }}" class="font-medium text-blue-600 light:text-blue-500 hover:underline ml-2"
                                            onclick="event.preventDefault();
                                                                this.closest('form').submit();">Delete</a>
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
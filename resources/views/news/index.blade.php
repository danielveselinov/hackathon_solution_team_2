<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('News') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">#</th>
                                    <th scope="col" class="py-3 px-6">Title</th>
                                    <th scope="col" class="py-3 px-6">Image</th>
                                    <th scope="col" class="py-3 px-6">Link</th>
                                    <th scope="col" class="py-3 px-6">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($news as $n)
                                <tr class="bg-white border-b light:bg-gray-900 light:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white">
                                        {{ $n->id }}
                                    </th>
                                    <td class="py-4 px-6">{{ $n->title }}</td>
                                    <td class="py-4 px-6">{{ $n->image }}</td>
                                    <td class="py-4 px-6">{{ $n->link }}</td>
                                    <td class="py-4 px-6 flex">
                                        <a href="#" class="font-medium text-blue-600 light:text-blue-500 hover:underline">Edit</a>
                                        <form method="POST" action="#">
                                            @csrf
                                            @method('DELETE')
                                            <a href="#" class="font-medium text-blue-600 light:text-blue-500 hover:underline ml-2"
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
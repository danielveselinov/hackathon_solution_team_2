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
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-auto">
                        <form action="{{ route('missions.store') }}" method="POST" class="w-96" style="margin: 0 auto;" enctype="multipart/form-data">
                            @csrf
                            @method('POST')
                            <div class="mb-6">
                                <div>
                                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 light:text-gray-300">Title</label>
                                    <input type="text" id="title" name="title" value="{{ old('title') }}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="e.g. Lorem Ipsum.." required>
                                    @error('title')
                                    <p class="mt-2 text-sm text-red-500 light:text-red-400">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 light:text-gray-400">Text</label>
                                <textarea id="text" name="text" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Text..">{{ old('text') }}</textarea>
                                @error('text')
                                <p class="mt-2 text-sm text-red-500 light:text-red-400">{{ $message }}</p>
                                @enderror
                            </div>

                            <div class="mb-6">
                                <p class="text-sm text-gray-400 light:text-gray-400">Selected image:</p>
                                <img class="w-50 h-50 rounded" src="#" />
                            </div>

                            <div class="mb-6">
                                <label class="block mb-2 text-sm font-medium text-gray-900 light:text-gray-300">Upload image</label>
                                <input class="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 cursor-pointer light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400" id="image" name="image" type="file">
                                @error('image')
                                <p class="mt-2 text-sm text-red-500 light:text-red-400">{{ $message }}</p>
                                @enderror
                            </div>

                            <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
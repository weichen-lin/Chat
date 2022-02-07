import React from 'react';
import MemberUnit from './member_unit';

class Members extends React.Component {
    render() {
        return (
            <div class="border-gray-300 lg:col-span-1 lg:block h-screen">
                <div class="w-full flex flex-col h-full justify-between">
                    <div class="bg-orange-200">
                        <h2 class="text-center mx-2 my-2 text-lg text-gray-600 ">Who's Online</h2> 
                    </div>
                    <ul class="overflow-y-auto h-full">
                        <MemberUnit />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Members;
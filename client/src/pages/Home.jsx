import React from 'react'
import PostContainer from '../component/ posts/PostContainer';

import Banner from '../component/banner/Banner';
import SelectionChip from '../component/selectionChip/SelectionChip';
import Topbar from '../component/topbar/Topbar';
const Home = () => {
  return (
        <div>
            <Banner/>
            <SelectionChip/>
            <PostContainer/>
        </div>
    )
}

export default Home
'use client'
import BlockTitle from "@/components/ui/BlockTitle";
import ParentComment from "./ParentComment";
import { buildTreeArray } from "@/utility/Functions";

const Comments = ({ comments }) => {
  return (
    <div id="comments" class="comments-area block">
      <BlockTitle title={"کامنت ها"} />
      <ParentComment comments={comments} className='comments-list'/>
    </div>
  );
};
export default Comments;

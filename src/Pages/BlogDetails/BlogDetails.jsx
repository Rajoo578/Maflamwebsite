import React from "react";
import { BlogHeader} from "../../Component";
import
{
  useScrollToTopWithDelay
} from  '../../hooks'
const BlogDetails = () => {
  useScrollToTopWithDelay(500);
  return (
    <div>
      <BlogHeader></BlogHeader>
    </div>
  );
};

export default BlogDetails;

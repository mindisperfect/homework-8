import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";
import { END_POINT } from "../../const/const";

const PostPostCard = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let {data} = await axios.get(
          `${END_POINT}`
        );
        setPost(data);
      } catch (err) {
        toast.error(err?.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [id]);
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>
          <p>{post.id}</p>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PostPostCard;

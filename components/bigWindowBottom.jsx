'use client'
import React, { useState, useEffect } from "react";
import Comment from "./comment";
import CommentScaliton from "./commentScaliton";
import { getProviders, signIn } from "next-auth/react";

export default function bigWindowBottom({user,data}) {
    const [comments,setComments]=useState([]);
    const [provider, setProvider] = useState(false);
    const [uid,setUid]=useState(null);
    const [hasdata,setHasdata]=useState(false);
    const [isScaliton,setIsScaliton]=useState(true)
  
    useEffect(() => {
      async function setUpProvider() {
        const providers = Object.values(await getProviders())[0];
        setProvider(providers);
  
        const comRes = await fetch("/api/get_comment",{
          method:"POST",
          body:JSON.stringify({
            pull:2,
            post_ID:data._id
          })
        });
        const commentJson=await comRes.json();
        setIsScaliton(false);
        setHasdata(commentJson.length===2);
        setComments(commentJson);
        
        if(user){const res = await fetch("/api/auth/session");
        const session=await res.json();
        setUid(session.user.id);};
      }
      setUpProvider();
    }, []);
  
    const submitComment = async(e) => {
      e.preventDefault();
      const res=await fetch('/api/post_comment',{
        method:'POST',
        body:JSON.stringify({
          user_ID:uid,
          post_ID:data._id,
          comment:e.target.comment.value
        })
      });
      const back=await res.json();
      setComments(prv=>[{...back,user_ID:user},...prv]);
      e.target.reset();
    };

    const loadMore=async()=>{
      setIsScaliton(true);
        const comRes = await fetch("/api/get_comment",{
            method:"POST",
            body:JSON.stringify({
              pull:5,
              post_ID:data._id,
              skip:comments.length
            })
          });
          const res=await comRes.json();
          setIsScaliton(false)
          setComments(pre=>[...pre,...res]);
          setHasdata(res.length===5);
    }

  return (
    <div className="mt-[58px] mx-6">
        <div className="flex justify-between h-12 items-start">
          <div className="flex items-start">
            <div className="h-12 w-12 border-2 border-white rounded-full mr-5 flex justify-center items-center overflow-hidden">
              <img
                src={user?.image ?? "/user.png"}
                loading="lazy"
                width={48}
                height={48}
                alt={user?.name??"User"}
              />
            </div>

            <form className="flex items-center" onSubmit={submitComment}>
              <input
                className="rounded-full w-[794px] h-12 comm pl-7 pr-16"
                onClick={() => {
                  !user ? signIn(provider.id) : null;
                }}
                type="text"
                name="comment"
                placeholder="Write your comment ......."
              />
              <button className="-ml-12 z-10 cursor-pointer" type="submit">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 18.6667C2.66667 21.0599 4.60676 23 7 23H7.99895L8 26.6665C8 27.0261 8.11648 27.3763 8.33202 27.6645C8.88334 28.4016 9.9278 28.5523 10.6649 28.0009L13.4985 25.8811L14.0265 23.7691C14.1219 23.3881 14.262 23.0216 14.4429 22.6771L9.99981 26.0008L9.99839 21H7C5.71133 21 4.66667 19.9553 4.66667 18.6667V7.33333C4.66667 6.04467 5.71133 5 7 5H25C26.2887 5 27.3333 6.04467 27.3333 7.33333V12.4595C28.0633 12.6384 28.7561 13.0072 29.3333 13.5661V7.33333C29.3333 4.94009 27.3932 3 25 3H7C4.60676 3 2.66667 4.94009 2.66667 7.33333V18.6667ZM24.1305 14.5593L16.2607 22.4292C15.8017 22.888 15.4763 23.4629 15.3189 24.0925L14.7087 26.5335C14.4433 27.5949 15.4048 28.5565 16.4663 28.2911L18.9072 27.6808C19.5368 27.5235 20.1117 27.198 20.5705 26.7391L28.4404 18.8692C29.6307 17.6791 29.6307 15.7495 28.4404 14.5593C27.2503 13.3691 25.3207 13.3691 24.1305 14.5593Z"
                    fill="white"
                    fill-opacity="0.68"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img src="/love.svg" alt="" />
            <p className="text-sm">like</p>
          </div>
        </div>
        <div>
          {comments.map((data)=><Comment data={data} />)}
          {isScaliton?<><CommentScaliton/><CommentScaliton/></>:null}
          {hasdata?<p onClick={loadMore} className="hover:underline cursor-pointer ml-16 mt-7">
            See more comments...........
          </p>:null}
        </div>
      </div>
  )
}

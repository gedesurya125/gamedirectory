import React from "react";
import { styled } from "@mui/material/styles";
import { Skeleton, Typography } from "@mui/material";
import * as appColor from "../../settings/appColor";

const TagsContainer = styled("div")(({ theme }) => ({
  // display: 'flex',
  marginBottom: "20px",
  "& .tag-list": {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const renderTagList = (tags) => {
  return tags.map((tag) => (
    <Typography
      component="div"
      key={tag.id}
      sx={{
        padding: "0.2em 1em",
        borderRadius: "50px",
        margin: "3px",
        background: appColor.primaryYellow,
        color: "black",
      }}
    >
      {tag.name}
    </Typography>
  ));
};

const Tags = ({ title, tags, sx, loading }) => {
  const renderTagsSkeleton = () => (
    <div>
      <Skeleton />
      <Skeleton width="60%" />
    </div>
  );
  const renderTags = (titleToRender, tagsToRender, styleSx, isLoading) => {
    if (!tagsToRender) {
      return renderTagsSkeleton();
    } else if(isLoading){
      return renderTagsSkeleton();
    } else {
      return (
        <TagsContainer
          sx={{
            ...styleSx,
          }}
        >
          <Typography
            sx={{
              // width: '100px',
              fontWeight: "bold",
              fontSize: "1.3em",
              whiteSpace: "nowrap",
              marginRight: "0.5em",
            }}
          >
            {titleToRender}
          </Typography>
          <div className="tag-list">{renderTagList(tagsToRender)}</div>
        </TagsContainer>
      );
    }
  };
  return <>{renderTags(title, tags, sx, loading)}</>;
};

export default Tags;

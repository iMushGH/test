import React from "react";

type SocialProps = {
  url: string;
  icon: React.ReactNode;
};

function Social(props: SocialProps) {
  const { url, icon } = props;

  return (
    <div className="w-4 h-4 rounded-full">
      <a href={url}>{icon}</a>
    </div>
  );
}

export default Social;

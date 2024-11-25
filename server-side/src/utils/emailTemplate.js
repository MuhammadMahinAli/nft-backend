export const emailTemplate = ({name}) => {
  return `<div style="font-family: Arial; font-size: 12px; background-color:#efefef;    padding:20px 10px">
    <h1 style="text-align:center color: blue">Congratulations ${name}!</h1>
    <p style="text-align:center">
    Your requested NFT is minted. You are now owner of that NFT!
    </p>
    </div>`;
};

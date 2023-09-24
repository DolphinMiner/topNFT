import classNames from "classnames";

type DiscordProps = {
  className?: string;
};
export const Discord = ({ className }: DiscordProps) => {
  return (
    <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1">
      <g
        id="discordG1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="discordG2">
          <rect id="discordRect1" x="0" y="0" width="26" height="26"></rect>
          <g
            id="discordG3"
            transform="translate(1.625000, 4.333333)"
            className={classNames([
              `fill-black hover:fill-white`,
              className ? className : "",
            ])}
            fillRule="nonzero"
          >
            <path
              d="M19.2884644,1.46392336 C19.2821412,1.45167086 19.2716624,1.44206981 19.2589048,1.43683996 C17.7838938,0.760089133 16.2273344,0.277512809 14.6281801,0.00118769941 C14.5983814,-0.00435219229 14.5683888,0.00984085014 14.5537781,0.0363961173 C14.3418233,0.421092177 14.1494153,0.816238404 13.977288,1.22032753 C12.253487,0.958656162 10.5000646,0.958656162 8.77626367,1.22032753 C8.60299679,0.815212316 8.40750542,0.419967579 8.19068124,0.0363961173 C8.17546206,0.0104761283 8.14593196,-0.00349079312 8.11624051,0.00118769941 C6.51691725,0.276932695 4.96025671,0.7595453 3.48543847,1.43687865 C3.47281343,1.44223091 3.4621607,1.45136953 3.45495026,1.46303347 C0.505603556,5.86749048 -0.302333816,10.1636526 0.0940128193,14.4066152 C0.0962655878,14.4276255 0.106946278,14.4468228 0.123611138,14.4598147 C1.8409884,15.7314008 3.76189563,16.7020123 5.80436033,17.3302293 C5.83381822,17.339066 5.86566338,17.328631 5.88417907,17.3040745 C6.32285618,16.7071874 6.71155705,16.0751367 7.046329,15.4143497 C7.05563341,15.3960087 7.05664608,15.3745631 7.04911137,15.3554269 C7.04157666,15.3362906 7.02621459,15.3212924 7.00690326,15.3142185 C6.39395039,15.0796893 5.80054042,14.7969699 5.23224224,14.4687135 C5.21127757,14.4563891 5.19783511,14.434426 5.19639841,14.4101496 C5.1949617,14.3858733 5.2057198,14.3624779 5.22508448,14.3477668 C5.34466815,14.2584421 5.46217696,14.1663728 5.57751727,14.0716322 C5.59815163,14.0546374 5.62663289,14.0507999 5.65102943,14.0617274 C9.37418839,15.7609012 13.4050151,15.7609012 17.0841055,14.0617274 C17.1085763,14.0500951 17.1375594,14.053605 17.1585462,14.0707423 C17.2740176,14.1659838 17.3918279,14.2583535 17.5118689,14.3477668 C17.5313371,14.362327 17.5422652,14.3856345 17.541007,14.4099126 C17.5397489,14.4341908 17.52647,14.4562437 17.505601,14.4687135 C16.9385951,14.7997312 16.3446472,15.0822735 15.7300888,15.3133286 C15.7107869,15.3206738 15.6955305,15.3358976 15.688144,15.3551837 C15.6807575,15.3744698 15.6819411,15.39599 15.6913982,15.4143497 C16.031775,16.0714619 16.4199034,16.7027164 16.8526582,17.3030299 C16.8706711,17.328284 16.9028149,17.3391907 16.9324769,17.3301133 C18.9786017,16.7040261 20.9028662,15.7333244 22.6223958,14.4598147 C22.6393335,14.4474532 22.6501201,14.42839 22.6519941,14.407505 C23.1264958,9.50219862 21.8575985,5.24124493 19.2884644,1.46392336 L19.2884644,1.46392336 Z M7.60235179,11.8230911 C6.48140736,11.8230911 5.55778506,10.7944249 5.55778506,9.53110047 C5.55778506,8.26777601 6.46349361,7.23903247 7.60235179,7.23903247 C8.75010881,7.23903247 9.66479358,8.27671353 9.64687983,9.53102309 C9.64687983,10.7944249 8.74113259,11.8230911 7.60235179,11.8230911 L7.60235179,11.8230911 Z M15.1617237,11.8230911 C14.0408179,11.8230911 13.1171956,10.7944249 13.1171956,9.53110047 C13.1171956,8.26777601 14.0229042,7.23903247 15.1617237,7.23903247 C16.3095581,7.23903247 17.2242042,8.27671353 17.2062904,9.53102309 C17.2062904,10.7944249 16.3095581,11.8230911 15.1617237,11.8230911 Z"
              id="discordPath1"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

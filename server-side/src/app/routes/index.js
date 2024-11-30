import express from "express";
import {UserRoutes} from "../modules/user/user.routes.js";
import {AuthRoutes} from "../modules/auth/auth.routes.js";
import {VersionRoutes} from "../modules/version/version.routes.js";
import {ProductRoutes} from "../modules/product/product.routes.js";
import {CollectionRoutes} from "../modules/collection/collection.routes.js";
import {LuckyDrawRoutes} from "../modules/luckyDraw/luckyDraw.routes.js";
import {CartRoutes} from "../modules/cart/cart.routes.js";
import {DropRoutes} from "../modules/drop/drop.routes.js";
import {MintNFTRoutes} from "../modules/mintNFT/mintNFT.routes.js";
import {NftMintRoutes} from "../modules/nftMint/nftMint.routes.js";
import {NotificationRoutes} from "../modules/notification/notification.routes.js";
import {OrderRoutes} from "../modules/order/order.routes.js";
import {RecycleRoutes} from "../modules/recycle/recycle.routes.js";
import {WishListRoutes} from "../modules/wishList/wishList.routes.js";
import {MetaDataRoutes} from "../modules/metadata/metadata.routes.js";
import { AuctionInfoRoutes } from "../modules/auctionInfo/auctionInfo.routes.js";
import { MarketPlaceRoutes } from "../modules/marketplace/marketplace.routes.js";
import { OfferInfoRoutes } from "../modules/offerInfo/offerInfo.routes.js";
import { SellListRoutes } from "../modules/sellList/sellList.routes.js";
import { NftRoutes } from "../modules/nft/nft.routes.js";
import { NftCollectionRoutes } from "../modules/nftCollection/nftCollection.routes.js";
import { TokenInfoRoutes } from "../modules/tokenInfo/tokenInfo.routes.js";
import { NftActivityRoutes } from "../modules/nftActivity/nftActivity.routes.js";




const router = express.Router();
const moduleRoutes = [
  {path: "/user", route: UserRoutes},
  {path: "/auth", route: AuthRoutes},
  {path: "/product", route: ProductRoutes},
  {path: "/version", route: VersionRoutes},
  {path: "/collection", route: CollectionRoutes},
  {path: "/luckyDraw", route: LuckyDrawRoutes},
  {path: "/cart", route: CartRoutes},
  {path: "/drop", route: DropRoutes},
  {path: "/mintNFT", route: MintNFTRoutes},
  {path: "/nftMint", route: NftMintRoutes},
  {path: "/notification", route: NotificationRoutes},
  {path: "/order", route: OrderRoutes},
  {path: "/recycle", route: RecycleRoutes},
  {path: "/wishlist", route: WishListRoutes},
  {path: "/metadata", route: MetaDataRoutes},
  {path: "/marketPlace", route: MarketPlaceRoutes},
  {path: "/sellList", route: SellListRoutes},
  {path: "/offer", route: OfferInfoRoutes},
  {path: "/auction", route: AuctionInfoRoutes},
  {path: "/nft", route: NftRoutes},
  {path: "/nftCollection", route: NftCollectionRoutes},
  {path: "/tokenInfo", route: TokenInfoRoutes},
  {path: "/nftActivity", route: NftActivityRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

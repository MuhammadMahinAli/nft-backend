import {Fashion} from "./fashion/fashion.model.js";
import {FullDesign} from "./fullDesign/fullDesign.model.js";
import {Garment} from "./garment/garment.model.js";
import {Pattern} from "./pattern/pattern.model.js";
import {TechPack} from "./techPack/techPack.model.js";
//creating gig service
export const createService = async (service, session) => {
  let result = null;
  if (service.title === "Technical Drawing and Tech Pack") {
    result = await TechPack.create([service], {session});
  }
  if (service.title === "Fashion Illustration") {
    result = await Fashion.create([service], {session});
  }
  if (service.title === "3D Garment Design") {
    result = await Garment.create([service], {session});
  }
  if (service.title === "Pattern Making") {
    result = await Pattern.create([service], {session});
  }
  if (service.title === "Full Design Process") {
    result = await FullDesign.create([service], {session});
  }
  return result[0];
};
//updating gig service
export const updateService = async (gig, service, session) => {
  if (service.title === "Technical Drawing and Tech Pack") {
    const result = await TechPack.findOneAndUpdate({gig}, service, {new: true}).session(session);
  }
  if (service.title === "Fashion Illustration") {
    const result = await Fashion.findOneAndUpdate({gig}, service, {new: true}).session(session);
  }
  if (service.title === "3D Garment Design") {
    const result = await Garment.findOneAndUpdate({gig}, service, {new: true}).session(session);
  }
  if (service.title === "Pattern Making") {
    const result = await Pattern.findOneAndUpdate({gig}, service, {new: true}).session(session);
  }
  if (service.title === "Full Design Process") {
    const result = await FullDesign.findOneAndUpdate({gig}, service, {new: true}).session(session);
  }
};

//deleting gig service
export const deleteService = async (gig, service, session) => {
  if (service === "Technical Drawing and Tech Pack") {
    const result = await TechPack.findOneAndDelete({gig}).session(session);
  }
  if (service === "Fashion Illustration") {
    const result = await Fashion.findOneAndDelete({gig}).session(session);
  }
  if (service === "3D Garment Design") {
    const result = await Garment.findOneAndDelete({gig}).session(session);
  }
  if (service === "Pattern Making") {
    const result = await Pattern.findOneAndDelete({gig}).session(session);
  }
  if (service === "Full Design Process") {
    const result = await FullDesign.findOneAndDelete({gig}).session(session);
  }
};

import { clientModel } from "../models/client.mjs";

export const createclient = async (clientInput) => {
  const newClient = await clientModel.create(clientInput);
  return newClient;
};

export const updateclient = async (id, clientInput) => {
  const clientData = await clientModel.findByIdAndUpdate(id, clientInput, {
    new: true,
  });
  return clientData;
};

export const deleteclient = async (clientId) => {
  const clientData = await clientModel.findByIdAndDelete(clientId);
  return clientData;
};

export const getclients = async () => {
  const clientData = await clientModel.find();
  return clientData;
};

export const getclientById = async (clientId) => {
  const clientData = await clientModel.findById(clientId);
  return clientData;
};

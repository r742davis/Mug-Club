const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
  id: Number,
  name: String,
  type: String,
  brewery: String,
  breweryLocation: String,
  finished: Boolean
}, { _id: false });

const CustomerSchema = new Schema({
  id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: [true, 'Yo, give me your first name']
  },
  lastName: {
    type: String,
    required: [true, 'Dude, you don\'t have a last name?']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  mugClub: {
    completed: { type: Boolean, default: false },
    clubId: Number,
    beers: [BeerSchema]
  }

}, {timestamps: false, strict: false});

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer;


// {
//   coors: { type: Boolean, default: false },
//   coorsLight: { type: Boolean, default: false },
//   budweiser: { type: Boolean, default: false },
//   budLight: { type: Boolean, default: false },
//   sierraNevadaPaleAle: { type: Boolean, default: false },
//   sierraNevadaTorpedo: { type: Boolean, default: false },
//   sierraNevadaTropicalTorpedo: { type: Boolean, default: false },
//   sierraNevadaSierraveza: { type: Boolean, default: false },
//   sierraNevadaSkiestaLager: { type: Boolean, default: false },
//   sierraNevadaKellerweisHefeweizen: { type: Boolean, default: false },
//   sierraNevadaOldChicoCrystalWheat: { type: Boolean, default: false },
//   sierraNevadaCelebration: { type: Boolean, default: false },
//   sierraNevadaHopBullet: { type: Boolean, default: false },
//   sierraNevadaHazyLittleThing: { type: Boolean, default: false },
//   sierraNevadaHopHunter: { type: Boolean, default: false },
//   sierraNevadaSidecarOrange: { type: Boolean, default: false },
//   sierraNevadaBackCountryBrown: { type: Boolean, default: false },
//   sierraNevadaPorter: { type: Boolean, default: false },
//   sierraNevadaOtraVez: { type: Boolean, default: false },
//   sierraNevadaKnightro: { type: Boolean, default: false },
//   modernTimesFruitlandsPassion: { type: Boolean, default: false },
//   bigStumpPeach: { type: Boolean, default: false },
//   bigStumpCapulets: { type: Boolean, default: false },
//   belchingBeaverPeanutButterStout: { type: Boolean, default: false },
//   guinnessDraught: { type: Boolean, default: false },
//   sixRiversMacadamiaNutPorter: { type: Boolean, default: false },
//   trackSevenPanic: { type: Boolean, default: false },
//   russianRiverPliny: { type: Boolean, default: false },
//   secretTrailHazy: { type: Boolean, default: false },
//   lagunitasIPA: { type: Boolean, default: false },
//   karlStraussAurora: { type: Boolean, default: false },
//   newGloryMindshaker: { type: Boolean, default: false },
//   newGloryGummyWormsHazyPaleAle: { type: Boolean, default: false },
//   fallRiverLazy: { type: Boolean, default: false },
//   deschutesFreshSqueezed: { type: Boolean, default: false },
//   elysianSpaceDust: { type: Boolean, default: false },
//   firestoneWalkerMindHaze: { type: Boolean, default: false },
//   bikeDogHaze: { type: Boolean, default: false },
//   altamountMauiWaui: { type: Boolean, default: false },
//   ammendmentBloodOrange: { type: Boolean, default: false },
//   firestoneWalker805: { type: Boolean, default: false },
//   konaBigWaveGoldenAle: { type: Boolean, default: false },
//   shockTopBelgianWheat: { type: Boolean, default: false },
//   lostCoastGreatWhite: { type: Boolean, default: false },
//   tenBarrelApocalypseIPA: { type: Boolean, default: false },
//   blueMoonBelgianWheat: { type: Boolean, default: false },
//   acePineapple: { type: Boolean, default: false },
//   northCoastScrimshawPilsner: { type: Boolean, default: false },
//   stellaArtois: { type: Boolean, default: false },
//   modeloEspecial: { type: Boolean, default: false },
//   coronaExtra: { type: Boolean, default: false },
//
// }

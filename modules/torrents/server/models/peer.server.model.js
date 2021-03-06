'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Peer Schema
 */
var PeerSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  passkey: {
    type: String,
    default: '',
    trim: true
  },
  info_hash: {
    type: Buffer,
    default: ''
  },
  peer_id: {
    type: Buffer,
    default: ''
  },
  peer_compact: {
    type: Buffer,
    default: ''
  },
  peer_ip: {
    type: String,
    default: '',
    trim: true
  },
  peer_port: {
    type: Number,
    default: 0
  },
  peer_uploaded: {
    type: Number,
    default: 0
  },
  peer_downloaded: {
    type: Number,
    default: 0
  },
  peer_seeder: {
    type: [{
      type: String,
      enum: ['yes', 'no']
    }],
    default: 'no'
  },
  peer_connectable: {
    type: [{
      type: String,
      enum: ['yes', 'no']
    }],
    default: 'no'
  },
  startedat: {
    type: Date,
    default: Date.now
  },
  finishedat: {
    type: Date,
    default: ''
  }
});

PeerSchema.index({user: -1, startedat: -1});
PeerSchema.index({info_hash: -1, startedat: -1});
PeerSchema.index({passkey: -1, startedat: -1});

mongoose.model('Peer', PeerSchema);

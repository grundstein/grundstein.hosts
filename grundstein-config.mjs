import { env, gas, gps, grs, gms } from 'grundstein/src/defaultConfig.mjs'

export const hosts = [
  {
    // the (internal!) root dns identifier of this pod
    name: 'grundstein.it',
    fqdn: 'cloud.grundstein.it',

    // which ip addresses this server is reachable at. used by ssh to connect to the server.
    // this option will disappear once pods get provisioned through the api.
    ip: '178.128.136.72',

    // the hostnames this pod will serve publicly,
    // this is in addition to the hosts in the repositories list below
    hostnames: [],

    // which services should be installed and started on this pod?
    services: {
      // this service should run on only one pod.
      // last to be decentralized, it is the certificate root until grundstein/gca exists.
      gps,

      grs,
      gms,
      gas,
    },

    // which repositories should gbs use to build from.
    // these repositories will be watched and rebuilt when pushed to.
    // in the future, the staging branch will also be served.
    repositories: {
      '178.128.136.72': {
        host: 'github.com',
        org: 'magic-examples',
        repo: 'magic-examples.github.io',
        branch: 'dev',
      },
    },
  },
]

export default {
  hosts,
  env,
}

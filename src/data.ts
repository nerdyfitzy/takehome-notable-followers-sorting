/**
 * Notable Instagram followers for an artist, exactly as our API hands them
 * to the frontend. You should not need to edit this.
 */

export interface NotableFollower {
  id: number;
  username: string;
  fullname: string;
  country: string;
  followers: string;
}

export const notableFollowers: NotableFollower[] = [
  { id: 1, username: 'johncrist', fullname: 'John Crist', country: 'US', followers: '1000000' },
  { id: 2, username: 'sarahkmusic', fullname: 'Sarah K', country: 'US', followers: '950000' },
  { id: 3, username: 'leobeats', fullname: 'Leo Beats', country: 'GB', followers: '870000' },
  { id: 4, username: 'minajoy', fullname: 'Mina Joy', country: 'JP', followers: '640000' },
  { id: 5, username: 'thedavidp', fullname: 'David P', country: 'CA', followers: '500000' },
  { id: 6, username: 'amarasings', fullname: 'Amara', country: 'NG', followers: '230000' },
  { id: 7, username: 'kofiwave', fullname: 'Kofi Wave', country: 'GH', followers: '95000' },
  { id: 8, username: 'nina_indie', fullname: 'Nina', country: 'FR', followers: '8000' },
];

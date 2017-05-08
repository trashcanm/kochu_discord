/* *
 * DiscoBot - Gaymers Discord Bot
 * Copyright (C) 2015 - 2017 DiscoBot Authors
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 * */

module.exports = {
  usage: '[@user]',
  description: 'Add the \'Under 18\' role. REMOVAL BY ADMIN/MOD ONLY',
  allowDM: false,
  process: (bot, message) => {

    const under18Role = message.guild.roles.find('name', 'Under 18');

    if (message.member.roles.findKey('name', 'Under 18')) {
      message.reply('You already have the Under 18 role. This can only be removed by an admin or moderator.');
      return;
    }
    message.member.addRole(under18Role);
    message.channel.send(message.member + ' you have been given the `Under 18` role. :ok_hand:');
  }
};

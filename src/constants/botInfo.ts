import Discord from 'discord.js';
import mongoose from 'mongoose';
import typescript from 'typescript';

export const botInfo = {
    name: 'VenusTs',
    versions: {
        venus: '1.0',
        typescript: typescript.version,
        djs: Discord.version,
        mongoose: mongoose.version,
        node: process.version
    },
    github: 'https://github.com/Mattis6666/VenusTs',
    issues: '',
    botInvite: '',
    supportServer: 'https://discord.gg/gTd7kfy',
    developers: [
        { name: 'Ven', role: 'Owner, Lead Developer', github: 'https://github.com/Mattis6666', discord: '265560538937819137' },
        { name: 'Awakai', role: 'Ideas', github: 'https://github.com/pixache', discord: '361059389731373066' }
    ]
};

type icon = 'file-alt'
  | 'file-archive'
  | 'file-audio'
  | 'file-code'
  | 'file-contract'
  | 'file-csv'
  | 'file-download'
  | 'file-excel'
  | 'file-image'
  | 'file-medical-alt'
  | 'file-pdf'
  | 'file-powerpoint'
  | 'file-video'
  | 'file-word'
  | 'kiss-beam'
  | 'kiss-wink-heart'
  | 'kiss'
  | 'laugh-beam'
  | 'laugh-squint'
  | 'laugh-wink'
  | 'laugh';

interface IConfig {
  name: string;
  icons: icon[];
}
const config: IConfig = {
  name: 'min-icon',
  icons: [
    'file-alt',
    'file-archive',
    'file-audio',
    'file-code',
    'file-contract',
    'file-csv',
    'file-download',
    'file-excel',
    'file-image',
    'file-medical-alt',
    'file-pdf',
    'file-powerpoint',
    'file-video',
    'file-word',
    'kiss-beam',
    'kiss-wink-heart',
    'kiss',
    'laugh-beam',
    'laugh-squint',
    'laugh-wink',
    'laugh',
  ],
};

module.exports = config;

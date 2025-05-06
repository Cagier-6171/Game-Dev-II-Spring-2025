const Item = {
    Key: 'Key',
    Lockpick: 'LockPick',
    Hammer: 'Hammer'
} as const;


type ItemType = typeof Item[keyof typeof Item];
type ItemValue = typeof Item[keyof typeof Item];


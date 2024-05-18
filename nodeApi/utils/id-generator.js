const idGenerator = data => {
    if (data.length === 0) return '1';
    const indexes = data.map(x => parseInt(x.id));
    const nextId = Math.max(...indexes) + 1;
    return nextId.toString();
}

module.exports = idGenerator;

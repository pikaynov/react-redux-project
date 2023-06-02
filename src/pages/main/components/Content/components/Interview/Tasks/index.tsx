import React from 'react';

export const Tasks = () => {

    const plus = function (value) {
        if (!(typeof this === 'number' && typeof value === 'number')) {
            throw new Error('invalid Data type!');
        }
        return this + value;
    }

    const minus = function (value) {
        if (!(typeof this === 'number' && typeof value === 'number')) {
            throw new Error('invalid Data type!');
        }
        return this - value;
    }

    Number.prototype.minus = minus;
    Number.prototype.plus = plus;

    return (<div>{(2).plus(3).minus(1)}</div>);
}

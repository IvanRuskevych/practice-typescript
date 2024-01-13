/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type typeTop = Pick<AllType, 'name' | 'color'>;
type typeBottom = Pick<AllType, 'position' | 'weight'>;

function compare1(top: typeTop, bottom: typeBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function compare2<T extends AllType>(
  top: Pick<T, keyof typeTop>,
  bottom: Pick<T, keyof typeBottom>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};

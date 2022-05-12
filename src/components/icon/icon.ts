import Block from '../../core/Block';
import classnames from '../../helpers/classnames';

import ArrowLeftIcon from '../../../static/icons/arrow-left.svg';
import ArrowRight1Icon from '../../../static/icons/arrow-right-1.svg';
import ArrowRight2Icon from '../../../static/icons/arrow-right-2.svg';
import MenuIcon from '../../../static/icons/menu.svg';
import CheckmarkIcon from '../../../static/icons/checkmark.svg';
import ClipIcon from '../../../static/icons/clip.svg';
import ImageIcon from '../../../static/icons/image.svg';

interface IIconProps {
  name: IconName;
  onClick: (e: Event) => void;
  className?: string;
}

export enum IconName {
  ArrowLeft,
  ArrowRight1,
  ArrowRight2,
  Menu,
  Checkmark,
  Clip,
  Image,
}

interface IIconPropsWithEvents extends Omit<IIconProps, 'onClick'> {
  events: {
    click: (e: Event) => void;
  }
}

class Icon extends Block<IIconPropsWithEvents> {
  constructor(props: IIconProps) {
    const { onClick, className, ...rest } = props;

    const classNames = [];
    if (className) {
      classNames.push(className);
    }

    super({
      ...rest,
      className: classnames(...classNames),
      events: {
        click: onClick,
      },
    });
  }

  getIcon(name: IconName) {
    switch (name) {
      case IconName.ArrowLeft:
        return ArrowLeftIcon;
      case IconName.ArrowRight1:
        return ArrowRight1Icon;
      case IconName.ArrowRight2:
        return ArrowRight2Icon;
      case IconName.Menu:
        return MenuIcon;
      case IconName.Checkmark:
        return CheckmarkIcon;
      case IconName.Clip:
        return ClipIcon;
      case IconName.Image:
        return ImageIcon;
      default:
        return '';
    }
  }

  protected render(): string {
    return `
      <img class="{{className}}" src=${this.getIcon(this.props.name)} />
    `;
  }
}

export default Icon;

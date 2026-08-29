import { RotateCcw, Settings2, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
  useAccessibilityStore,
  type FontFamily,
  type FontSize,
  type LineHeight,
} from '@/stores/accessibility-store'

type ToggleSettingProps = {
  id: string
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

function ToggleSetting({
  id,
  label,
  checked,
  onCheckedChange,
}: ToggleSettingProps) {
  return (
    <div className="border-border bg-muted/50 flex min-h-12 items-center justify-between gap-4 rounded-xl border-2 p-3">
      <Label htmlFor={id} className="leading-snug">
        {label}
      </Label>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  )
}

export function AccessibilityDialog() {
  const { t } = useTranslation()
  const store = useAccessibilityStore()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={t('a11y.open')}
        >
          <Settings2 className="size-5" aria-hidden="true" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('a11y.title')}</DialogTitle>
          <DialogDescription>{t('a11y.description')}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-2">
          <div className="grid gap-2">
            <Label htmlFor="font-size">{t('a11y.fontSize')}</Label>
            <Select
              value={store.fontSize}
              onValueChange={(value) => store.setFontSize(value as FontSize)}
            >
              <SelectTrigger id="font-size">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">
                  {t('a11y.fontSizes.small')}
                </SelectItem>
                <SelectItem value="default">
                  {t('a11y.fontSizes.default')}
                </SelectItem>
                <SelectItem value="large">
                  {t('a11y.fontSizes.large')}
                </SelectItem>
                <SelectItem value="extraLarge">
                  {t('a11y.fontSizes.extraLarge')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="font-family">{t('a11y.fontFamily')}</Label>
            <Select
              value={store.fontFamily}
              onValueChange={(value) =>
                store.setFontFamily(value as FontFamily)
              }
            >
              <SelectTrigger id="font-family">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">
                  {t('a11y.fontFamilies.system')}
                </SelectItem>
                <SelectItem value="readable">
                  {t('a11y.fontFamilies.readable')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="line-height">{t('a11y.lineHeight')}</Label>
            <Select
              value={store.lineHeight}
              onValueChange={(value) =>
                store.setLineHeight(value as LineHeight)
              }
            >
              <SelectTrigger id="line-height">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">
                  {t('a11y.lineHeights.normal')}
                </SelectItem>
                <SelectItem value="relaxed">
                  {t('a11y.lineHeights.relaxed')}
                </SelectItem>
                <SelectItem value="loose">
                  {t('a11y.lineHeights.loose')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3">
            <ToggleSetting
              id="reduced-motion"
              label={t('a11y.reducedMotion')}
              checked={store.reducedMotion}
              onCheckedChange={store.setReducedMotion}
            />
            <ToggleSetting
              id="high-visibility-links"
              label={t('a11y.highVisibilityLinks')}
              checked={store.highVisibilityLinks}
              onCheckedChange={store.setHighVisibilityLinks}
            />
            <ToggleSetting
              id="strong-focus-outline"
              label={t('a11y.strongFocusOutline')}
              checked={store.strongFocusOutline}
              onCheckedChange={store.setStrongFocusOutline}
            />
            <ToggleSetting
              id="highlight-headings"
              label={t('a11y.highlightHeadings')}
              checked={store.highlightHeadings}
              onCheckedChange={store.setHighlightHeadings}
            />
          </div>
        </div>

        <div className="border-border flex flex-wrap justify-between gap-3 border-t-2 pt-4">
          <Button type="button" variant="ghost" onClick={store.reset}>
            <RotateCcw className="size-4" aria-hidden="true" />
            {t('common.reset')}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              <X className="size-4" aria-hidden="true" />
              {t('common.close')}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
